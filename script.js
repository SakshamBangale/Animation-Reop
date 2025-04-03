// Register GSAP ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);
// Text Animation (Scaling Up from Top)

gsap.fromTo(
    '.Text-Animation-Top',
    {
        opacity: 0,
        scaleY: 0, // Starts from invisible and squashed
    },
    {
        scaleY: 1, // Expands to full height
        opacity: 1, // Fades in
        duration: 1, // Animation duration
        stagger: 0.8, // Delay between each element
        ease: 'power1.out' // Easing function
    }
);

// Text Animation (Moving Left and Up)
gsap.fromTo(
    '.Text-Animation-Left',
    {
        x: 0,
        y: 0,
        opacity: 1, // Starts at original position
    },
    {
        x: -500, // Moves left
        y: -500, // Moves up
        opacity: 0, // Fades out
        duration: 1, // Animation duration
        stagger: 0.8, // Delay between each element
        scrollTrigger: {
            trigger: '.Hero-Screen-Main', // Element that triggers the animation
            start: 'top top', // Animation starts when the top of the element reaches the top of the viewport
            end: '20%', // Animation ends when 20% of the element is scrolled
            scrub: 1, // Smooth animation sync with scroll
        }
    }
);

// Text Animation (Moving Right and Down)
gsap.fromTo(
    '.Text-Animation-Right',
    {
        x: 0,
        y: 0,
        opacity: 1, // Starts at original position
    },
    {
        x: 500, // Moves right
        y: 500, // Moves down
        opacity: 0, // Fades out
        duration: 1, // Animation duration
        stagger: 0.8, // Delay between each element
        scrollTrigger: {
            trigger: '.Hero-Screen-Main', // Same trigger element
            start: 'top top',
            end: '20%',
            scrub: 1,
        }
    }
);

// Hero Screen Scaling Effect
gsap.fromTo(
    '.Hero-screen',
    {
        scale: 1, // Normal scale
    },
    {
        scale: 52, // Expands massively
        scrollTrigger: {
            trigger: '.Hero-Screen-Main',
            pin: true, // Keeps the section fixed while scrolling
            start: 'top top',
            end: '40%', // Ends when 40% is scrolled
            scrub: 1, // Smooth scaling effect
        }
    }
);

// Image Moving Upward
gsap.fromTo(
    '.Up-Img',
    {
        y: 500, // Starts from below
    },
    {
        y: 0, // Moves to original position
        duration: 1,
        stagger: 0.8,
        scrollTrigger: {
            trigger: '.Home-Screen-1',
            pin: true, // Keeps section fixed while scrolling
            start: 'top top',
            end: '40%',
            scrub: 1,
        }
    }
);

// Text Animation (Scaling and Rotating)
gsap.fromTo(
    '.Text-Animation',
    {
        scale: 0, // Starts at zero size
    },
    {
        scale: 1, // Expands to full size
        rotateX: 360, // Rotates around X-axis
        duration: 1,
        stagger: 0.8,
        scrollTrigger: {
            trigger: '.Home-Screen-1',
            start: 'top top',
            end: '40%',
            scrub: 1,
        }
    }
);
