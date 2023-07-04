import React from 'react';
import './style.css';
function Home() {
    return (
        <>
        <main>
            <div className="container">
                <figure className="logo-cefet">
                    <img src="imagens\cefet-entrada.jpg" alt="Header Image" />
                </figure>
                <h2>Bem vindo ao Não Teams!</h2>
                <img alt="Placeholder Image" />
                <h4>Um site educacional.</h4>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at
                accumsan mauris. Aliquam sit amet gravida nisi. Sed consectetur metus
                eu turpis finibus, sit amet suscipit sapien scelerisque. Phasellus vel
                metus odio. Fusce lacinia mi id eros laoreet, id mollis eros sagittis.
                Vivamus luctus ante eu est imperdiet, eu cursus libero interdum.
                </p>
                <div className="announcements">
                    <figure>
                        <img src="imagens\anuncio.png" alt="Announcements Image"  ></img>
                    </figure>
                    <h3>Anúncios</h3>
                    <ul>
                        <li>- Problemas relatados ao logar estão sendo analisados.</li>
                        <li>- O fim do período ocorrerá em julho/2023.</li>
                        <li>
                        - Dúvidas ou problemas? Entre em contato conosco{" "}
                        <a href="contact.html"> aqui </a>.
                        </li>
                    </ul>
                </div>
                <div className="features">
                    <figure>
                        <img src="#" alt="Features Image" />
                    </figure>
                    <h3>Nossas Características</h3>
                    <ul>
                        <li>Suporte e guias personalizados.</li>
                        <li>Oportunidades práticas de aprendizado.</li>
                        <li>Tecnologias e métodos modernos e atuais.</li>
                        <li>Horários flexíveis para se encaixar na sua agenda.</li>
                        <li>Especialistas com experiência de mercado como professores.</li>
                    </ul>
                </div>
                <div className="testimonial">
                    <figure>
                        <img src="#" alt="Testimonial Image" />
                    </figure>
                    <h3>Nossos alumni acham que:</h3>
                    <blockquote>"A única constante da vida é a mudança."</blockquote>
                    <cite>Heráclito de Éfeso</cite>
                    <blockquote>
                        "A economia é uma virtude distributiva e consiste não em poupar mas
                        em escolher."
                    </blockquote>
                    <cite>Edmund Burke</cite>
                    <blockquote>
                        "A riqueza de uma nação se mede pela riqueza do povo e não pela
                        riqueza dos príncipes."
                    </blockquote>
                    <cite>Adam Smith</cite>
                </div>
            </div>
        </main>
        <footer>
        <div className="container">
            <p>© 2023 Não Teams - um trabalho de software web para o Cefet.</p>
        </div>
        </footer>
        </>
    );
}
export default Home;
