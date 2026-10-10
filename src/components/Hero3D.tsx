import { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'

function webglOk() { try { const c = document.createElement('canvas'); return !!(c.getContext('webgl2') || c.getContext('webgl')) } catch { return false } }

export default function Hero3D() {
  const ref = useRef<HTMLDivElement>(null)
  const [ok, setOk] = useState(true)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const lowPower = (navigator.hardwareConcurrency || 4) <= 2
    if (!webglOk() || lowPower) { setOk(false); return }
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const renderer = new THREE.WebGLRenderer({ antialias: !lowPower, alpha: true })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75))
    el.appendChild(renderer.domElement)
    const scene = new THREE.Scene()
    const cam = new THREE.PerspectiveCamera(40, 1, 0.1, 50); cam.position.z = 7.2
    const group = new THREE.Group(); scene.add(group)
    const head = new THREE.Mesh(new THREE.SphereGeometry(0.42, 32, 32), new THREE.MeshStandardMaterial({ color: 0x1fb6ff, metalness: 0.4, roughness: 0.25 }))
    head.position.y = 1.9
    const body = new THREE.Mesh(new THREE.IcosahedronGeometry(1.25, 1), new THREE.MeshStandardMaterial({ color: 0x1b3fb8, metalness: 0.5, roughness: 0.3, flatShading: true }))
    body.position.y = 0.2; body.scale.set(0.9, 1.35, 0.9)
    const wire = new THREE.Mesh(new THREE.IcosahedronGeometry(1.25, 1), new THREE.MeshBasicMaterial({ color: 0x7fd6ff, wireframe: true, transparent: true, opacity: 0.35 }))
    wire.position.copy(body.position); wire.scale.set(1.05, 1.42, 1.05)
    const ring = new THREE.Mesh(new THREE.TorusGeometry(2.3, 0.025, 12, 120), new THREE.MeshBasicMaterial({ color: 0xf2b621 }))
    ring.rotation.x = Math.PI / 2.6
    const ring2 = new THREE.Mesh(new THREE.TorusGeometry(2.9, 0.012, 12, 120), new THREE.MeshBasicMaterial({ color: 0x1fb6ff, transparent: true, opacity: 0.6 }))
    ring2.rotation.set(Math.PI / 2.2, 0.5, 0)
    group.add(head, body, wire, ring, ring2)
    const n = lowPower ? 60 : 160, pos = new Float32Array(n * 3)
    for (let i = 0; i < n; i++) { const r = 3 + Math.random() * 2.5, a = Math.random() * 6.28, b = Math.random() * 3.14; pos[i*3] = r*Math.sin(b)*Math.cos(a); pos[i*3+1] = r*Math.cos(b); pos[i*3+2] = r*Math.sin(b)*Math.sin(a) }
    const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.BufferAttribute(pos, 3))
    const pts = new THREE.Points(g, new THREE.PointsMaterial({ color: 0xf2b621, size: 0.05 })); scene.add(pts)
    scene.add(new THREE.AmbientLight(0xffffff, 0.7))
    const dl = new THREE.DirectionalLight(0xffffff, 2.2); dl.position.set(3, 4, 5); scene.add(dl)
    const dl2 = new THREE.DirectionalLight(0x1fb6ff, 1.5); dl2.position.set(-4, -2, 2); scene.add(dl2)
    const size = () => { const w = el.clientWidth, h = el.clientHeight; renderer.setSize(w, h); cam.aspect = w / h; cam.updateProjectionMatrix(); if (reduce) renderer.render(scene, cam) }
    size(); const ro = new ResizeObserver(size); ro.observe(el)
    let mx = 0, my = 0
    const mm = (e: PointerEvent) => { const r = el.getBoundingClientRect(); mx = ((e.clientX - r.left) / r.width - 0.5); my = ((e.clientY - r.top) / r.height - 0.5) }
    window.addEventListener('pointermove', mm)
    let raf = 0, visible = true
    const io = new IntersectionObserver(([e]) => { visible = e.isIntersecting }); io.observe(el)
    const t0 = performance.now()
    const tick = () => {
      raf = requestAnimationFrame(tick)
      if (!visible) return
      const t = (performance.now() - t0) / 1000
      group.rotation.y += (mx * 0.8 - group.rotation.y) * 0.04 + 0.004
      group.rotation.x += (my * 0.4 - group.rotation.x) * 0.05
      group.position.y = Math.sin(t) * 0.12
      ring.rotation.z = t * 0.4; ring2.rotation.z = -t * 0.25; pts.rotation.y = t * 0.05
      renderer.render(scene, cam)
    }
    if (!reduce) tick()
    return () => { cancelAnimationFrame(raf); ro.disconnect(); io.disconnect(); window.removeEventListener('pointermove', mm); renderer.dispose(); g.dispose(); if (renderer.domElement.parentNode === el) el.removeChild(renderer.domElement) }
  }, [])
  if (!ok) return <div className="fallback" aria-hidden="true"><svg viewBox="0 0 200 260" width="60%"><circle cx="100" cy="30" r="22" fill="#1fb6ff"/><path d="M100 70c-30 0-45 18-45 48v60h14l5 70h52l5-70h14v-60c0-30-15-48-45-48z" fill="#1b3fb8" stroke="#1fb6ff" strokeWidth="3"/><rect x="40" y="244" width="120" height="6" rx="3" fill="#f2b621"/></svg></div>
  return <div ref={ref} style={{ position: 'absolute', inset: 0 }} aria-hidden="true" />
}
