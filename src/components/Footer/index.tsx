import React from 'react';

import { Container, Content } from './styles';

const Footer: React.FC = () => {
  return (
    <Container>
      <Content>
        <div className="col-1">
          <div>
            <img src="/assets/images/payments.svg" alt="payments" />
          </div>
        </div>
        <div className="col-2">
          <div>
            <img src="/assets/images/safety.svg" alt="safety" />
          </div>
        </div>
        <div className="col-3">
          <a
            href="https://api.whatsapp.com/send?phone=5511989809037&text=Hello!%20Quero%20saber%20mais%20sobre%20o%20curso%20Ingl%C3%AAs%20do%20Zero%20ao%20Cem"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/assets/images/whatsapp.svg" alt="whatsapp" />
          </a>
        </div>
      </Content>
    </Container>
  );
};

export default Footer;
