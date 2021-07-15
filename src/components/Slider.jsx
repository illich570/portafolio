import Slider from 'react-slick'

export default function SliderCard({ children }) {
	const settings = {
		dots: true,
		infinite: true,
		speed: 1500,
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
					slidesToShow: 3,
					slidesToScroll: 1,
				},
			},
		],
	}
	return <Slider {...settings}>{children}</Slider>
}
