export const keyframes = {
    'accordion-down': {
        from: { height: 0 },
        to: { height: 'var(--radix-accordion-content-height)' }
    },
    'accordion-up': {
        from: { height: 'var(--radix-accordion-content-height)' },
        to: { height: 0 }
    },
    'slideDownAndFade': {
        from: { opacity: 0, transform: 'translateY(-2px)' },
        to: { opacity: 1, transform: 'translateY(0)' }
    },
    'slideUpAndFade': {
        from: { opacity: 0, transform: 'translateY(2px)' },
        to: { opacity: 1, transform: 'translateY(0)' }
    },
    'slideRightAndFade': {
        from: { opacity: 0, transform: 'translateX(2px)' },
        to: { opacity: 1, transform: 'translateX(0)' }
    },
    'slideLeftAndFade': {
        from: { opacity: 0, transform: 'translateX(-2px)' },
        to: { opacity: 1, transform: 'translateX(0)' }
    },
    'fadeInAnimation':{
        from: { opacity: 0 },
        to: { opacity: 1 }
    },
    'fadeOutAnimation':{
        from: { opacity: 1 },
        to: { opacity: 0 }
    },
    'loader':{
        '0%': { transform: 'rotate(0deg)' },
        '100%': { transform: 'rotate(360deg)' }
    },
    'openToast': {
        from: { opacity: 0, transform: 'translateY(-100%)' },
        to: { opacity: 1, transform: 'translateY(0)' }
    },
    'closeToast': {
        from: { opacity: 1, transform: 'translateY(0)' },
        to: { opacity: 0, transform: 'translateY(-100%)' }
    },
    'overlayShow': {
        from: { opacity: 0 },
        to: { opacity: 1 }
    },
    'contentShow': {
        from: { opacity: '0', transform: 'translate(-50%, -48%) scale(0.96)' },
        to: { opacity: '1', transform: 'translate(-50%, -50%) scale(1)' },
    },
    'size-animation': {
        '0%': { width: 0 },
        '100%': { width: '100%' }
    }
}