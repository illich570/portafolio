import Slider from 'react-slick'

export default function SliderCard({ children }) {
	const settings = {
		dots: true,
		infinite: true,
		speed: 1500,
		autoplaySpeed: 2500,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		arrows: false,
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
