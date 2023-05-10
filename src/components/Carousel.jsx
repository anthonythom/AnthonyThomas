
import Carousel from 'react-bootstrap/Carousel';







function UncontrolledExample() {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="public\img\project1.png"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h1>Zumbilandia</h1>
                    <p>Jogo de escolhas feito utilizando HTML/CSS e JavaScript.</p>
                    <a href="https://github.com/hugolegramandi/SpinOff_GoT" target="_blank">
                    <button type="button" class="btn btn-outline-light">Ver mais.</button>
                  </a>

                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="public\img\projeto 2.png"
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h1>Game of Spin-Off</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <a href="https://github.com/hugolegramandi/SpinOff_GoT" target="_blank">
                    <button type="button" class="btn btn-outline-light">Ver mais.</button>
                  </a>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-"
                    src="public\img\projeto 3.png"
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h1>Third slide label</h1>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                    <a href="https://github.com/hugolegramandi/SpinOff_GoT" target="_blank">
                    <button type="button" class="btn btn-outline-light">Ver mais.</button>
                  </a>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="public\img\projeto 4.png"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h1>FrontEnders</h1>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    <a href="https://github.com/hugolegramandi/SpinOff_GoT" target="_blank">
                    <button type="button" class="btn btn-outline-light">Ver mais.</button>
                  </a>

                </Carousel.Caption>
            </Carousel.Item>


            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="public\img\tatuaria.png"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h1>Tatuaria</h1>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    <a href="https://github.com/hugolegramandi/SpinOff_GoT" target="_blank">
                    <button type="button" class="btn btn-outline-light">Ver mais.</button>
                  </a>
                </Carousel.Caption>
            </Carousel.Item>

        </Carousel>
    );
}

export default UncontrolledExample;