import React from 'react';
import BuyButton from '../BuyButton';

import { Container, Content } from './styles';

const Abstract: React.FC = () => {
  return (
    <Container>
      <Content>
        <div className="view-left">
          <div className="background" data-aos="fade-right" />

          <div className="item">
            <div>
              <h2 data-aos="fade-down" data-aos-delay="200">
                O que é o curso Inglês do Zero ao Cem?
              </h2>
              <p data-aos="fade-up" data-aos-delay="300">
                Um curso de inglês completo com um método diferenciado e focado
                em um ensino leve e descontraído com explicações claras e
                diretas de forma que todo aluno entenda e absorva o conteúdo da
                melhor forma possível. O conteúdo é apresentado de forma
                cronológica, lógica e organizada e aulas conduzem o aluno não
                apenas a assistir mas também a praticar a parte ativa do idioma.
              </p>

              <p data-aos="fade-up" data-aos-delay="400">
                O conteúdo é apresentado de forma cronológica, lógica e
                organizada e aulas conduzem o aluno não apenas a assistir mas
                também a praticar a parte ativa do idioma.
              </p>
            </div>

            <iframe
              data-aos="fade-left"
              data-aos-delay="400"
              src="https://www.youtube.com/embed/HmZKgaHa3Fg"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>

        <div className="view-right">
          <div className="background" data-aos="fade-left" />

          <div className="item">
            <iframe
              data-aos-delay="400"
              data-aos="fade-right"
              src="https://www.youtube.com/embed/HmZKgaHa3Fg"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />

            <div>
              <h2 data-aos="fade-down" data-aos-delay="400">
                Como acessar as aulas do curso?
              </h2>
              <p data-aos="fade-up" data-aos-delay="400">
                Como acessar as aulas do curso? No vídeo ao lado você verá como
                é simples acessar todos os recursos que o Inglês do Zero ao Cem
                oferece de forma simples e totalmente online e até mesmo offline
                através do aplicativo Hotmart sparkles.
              </p>
            </div>
          </div>
        </div>
        <BuyButton />
      </Content>
    </Container>
  );
};

export default Abstract;