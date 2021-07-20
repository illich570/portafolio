import Slider from 'react-slick'

export default function SliderCard({ children }) {
	const settings = {
		dots: true,
		infinite: true,
		speed: 1200,
		autoplaySpeed: 800,
		slidesToShow: 4,
		slidesToScroll: 2,
		autoplay: true,
		arrows: false,
		pauseOnDotsHover: true,
		pauseOnFocus: true,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				},
			},
		],
	}
	return <Slider {...settings}>{children}</Slider>
}
