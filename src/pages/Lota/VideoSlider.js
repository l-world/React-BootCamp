import React from 'react'
import dataSlier from './titles'

export default function VideoSlider() {

    const [slideIndex, setSlideIndex] = React.useState(1);

    React.useEffect(() => {
        const timer = setInterval(next, 10000)
        return function () {
            clearInterval(timer)
        }
    })

    const next = () => {
        if (slideIndex < dataSlier.length) {
            setSlideIndex(slideIndex + 1)
        } else if (slideIndex === dataSlier.length) {
            setSlideIndex(1)
        }
    }

    const prev = () => {
        if (slideIndex !== 1) {
            setSlideIndex(slideIndex - 1)
        } else if (slideIndex === 1) {
            setSlideIndex(dataSlier.length)
        }
    }

    const videos = dataSlier.map((title, index) => {
        return <div
            key={title.id}
            className={slideIndex === (index + 1) ? 'lota-slider_heros active-animate' : "lota-slider_heros"}
        >
            <video
                id={`hero-video_${index}`}
                preload="metadata"
                autoPlay="autoplay"
                className='lota-slider_video'
                muted
            >
                <source
                    type="video/mp4"
                    src={process.env.PUBLIC_URL + `/video/${index + 1}.mp4`}
                />
                <source
                    type="video/webm"
                    src={process.env.PUBLIC_URL + `/video/${index + 1}.webm`}
                />
                Your browser does not support video on HTML.
            </video>
        </div>

    })

    return (
        <section className='lota-slider'>
            {videos}
        </section>
    )
}
