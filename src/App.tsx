import { Suspense, useEffect, useLayoutEffect, useRef } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import TabBar from '@/components/TabBar'
import QuickMenu from '@/components/QuickMenu'
import Rail from '@/components/Rail'
import CursorRing from '@/components/CursorRing'
import AccessMenu from '@/components/AccessMenu'
import { useLenis, SCROLLER_ID } from '@/hooks/useLenis'
import { useIsPhone } from '@/hooks/useMediaQuery'

export default function App() {
  useLenis()

  const { pathname } = useLocation()
  const FIXED_ROUTES = ['/']
  const isFixed = FIXED_ROUTES.includes(pathname)
  const phone = useIsPhone()
  const panelRef = useRef<HTMLElement>(null)

  useEffect(() => {
    panelRef.current?.scrollTo({ top: 0, behavior: 'auto' })
  }, [pathname])

  useEffect(() => {
    const removeFallback = () => {
      const fallback = document.getElementById('static-fallback')
      const visibleHeading = document.querySelector<HTMLElement>('.home__title, .pgrid__title')
      if (!fallback || !visibleHeading) return
      const bodyOpacity = Number.parseFloat(getComputedStyle(document.body).opacity || '1')
      const headingStyle = getComputedStyle(visibleHeading)
      if (
        visibleHeading.getBoundingClientRect().width > 0 &&
        headingStyle.visibility !== 'hidden' &&
        headingStyle.display !== 'none' &&
        Number.parseFloat(headingStyle.opacity || '1') > 0.1 &&
        bodyOpacity > 0.1
      ) {
        fallback.remove()
      }
    }
    const first = requestAnimationFrame(() => requestAnimationFrame(removeFallback))
    const timer = window.setTimeout(removeFallback, 1200)
    return () => {
      cancelAnimationFrame(first)
      window.clearTimeout(timer)
    }
  }, [pathname])

  const firstPath = useRef(pathname)
  useLayoutEffect(() => {
    if (pathname !== firstPath.current) document.documentElement.classList.add('has-navigated')
  }, [pathname])



  return (
    <>
      <CursorRing />
      <a href={`#${SCROLLER_ID}`} className="skip-link">Skip to main content</a>

      {phone && pathname !== '/' && <QuickMenu className="qmenu--float" />}
      <div className="shell">
        <Rail />
        <main
          ref={panelRef}
          id={SCROLLER_ID}
          className="shell__panel"
          data-fixed={isFixed ? 'true' : 'false'}
        >
          <Suspense fallback={null}>
            <Outlet />
          </Suspense>
        </main>
      </div>
      {phone && <TabBar />}
      <AccessMenu />
    </>
  )
}
