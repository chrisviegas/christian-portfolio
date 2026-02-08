import { useState, useRef, useEffect } from 'react'

export function use3DTilt(ref, options = { max: 25, perspective: 1000, scale: 1.05 }) {
    const [style, setStyle] = useState({})

    useEffect(() => {
        const element = ref.current
        if (!element) return

        const handleMouseMove = (e) => {
            const rect = element.getBoundingClientRect()
            const x = e.clientX - rect.left
            const y = e.clientY - rect.top
            const centerX = rect.width / 2
            const centerY = rect.height / 2

            const rotateX = ((y - centerY) / centerY) * -options.max
            const rotateY = ((x - centerX) / centerX) * options.max

            setStyle({
                transform: `perspective(${options.perspective}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(${options.scale}, ${options.scale}, ${options.scale})`,
                transition: 'transform 0.1s ease-out'
            })
        }

        const handleMouseLeave = () => {
            setStyle({
                transform: `perspective(${options.perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`,
                transition: 'transform 0.5s ease-out'
            })
        }

        element.addEventListener('mousemove', handleMouseMove)
        element.addEventListener('mouseleave', handleMouseLeave)

        return () => {
            element.removeEventListener('mousemove', handleMouseMove)
            element.removeEventListener('mouseleave', handleMouseLeave)
        }
    }, [ref, options.max, options.perspective, options.scale])

    return style
}
