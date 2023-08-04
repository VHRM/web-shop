import { Injectable } from "@angular/core";
import { UserState } from "./state/user.state";
import { ProductState } from "./state/product.state";
import { PaymentState } from "./state/payment.state";
import { Observable } from "rxjs";
import { Product } from "./types/product";

@Injectable()
export class AppFacade {
    private readonly products = [
        {
            id: 1,
            nome: "Desenvolvimento Web",
            descricao: "Desenvolvimento de plataforma web a partir do design informado pelo usuário",
            imageUrl: "https://assets-global.website-files.com/6410ebf8e483b5bb2c86eb27/6410ebf8e483b53d6186fc53_ABM%20College%20Web%20developer%20main.jpg",
            prazo: "6 meses",
            price: 6000
          },
          {
            id: 2,
            nome: "Hospedagem de Sites",
            descricao: "Hospedagem segura e confiável para sites e aplicações web",
            imageUrl: "https://assets-blog.hostgator.com.br/wp-content/uploads/2016/12/o-que-e-hospedagem-de-sites-blog.webp",
            prazo: "1 ano",
            price: 1200
          },
          {
            id: 3,
            nome: "Otimização de SEO",
            descricao: "Melhore o ranking do seu site nos motores de busca e atraia mais tráfego orgânico",
            imageUrl: "https://cayman.com.br/thumbs/746/364/02062020164850000000452687.jpg",
            prazo: "3 meses",
            price: 2500
          },
          {
            id: 4,
            nome: "Design Gráfico",
            descricao: "Criação de identidade visual, logotipos e materiais gráficos para sua marca",
            imageUrl: "https://www.remessaonline.com.br/blog/wp-content/uploads/2022/03/o-que-faz-um-designer-grafico.jpg.optimal.jpg",
            prazo: "2 meses",
            price: 3000
          },
          {
            id: 5,
            nome: "Desenvolvimento de E-commerce",
            descricao: "Criação de lojas virtuais personalizadas para venda de produtos online",
            imageUrl: "https://www.agenciaeplus.com.br/wp-content/uploads/2018/11/desenvolvimento2.jpg",
            prazo: "4 meses",
            price: 5000
          },
          {
            id: 6,
            nome: "Consultoria em Marketing Digital",
            descricao: "Estratégias de marketing digital para alavancar seu negócio online",
            imageUrl: "https://neilpatel.com/wp-content/uploads/2018/01/word-image-391.jpeg",
            prazo: "2 meses",
            price: 3500
          },
          {
            id: 7,
            nome: "Desenvolvimento de Aplicativos Mobile",
            descricao: "Criação de aplicativos móveis para Android e iOS",
            imageUrl: "https://www.alura.com.br/artigos/assets/desenvolvimento-apps-mobile-por-onde-comecar/desenvolvimento-apps-mobile-por-onde-comecar.png",
            prazo: "5 meses",
            price: 5500
          },
          {
            id: 8,
            nome: "Gestão de Redes Sociais",
            descricao: "Gerenciamento e criação de conteúdo para suas redes sociais",
            imageUrl: "https://static.portaldaindustria.com.br/portaldaindustria/noticias/media/imagem_plugin/shutterstock_C6TusCx.jpg",
            prazo: "1 mês",
            price: 1500
          },
          {
            id: 9,
            nome: "Configuração de Servidores",
            descricao: "Configuração e otimização de servidores para aplicações web",
            imageUrl: "http://tecnoead.com/wp-content/uploads/2017/06/Configura%C3%A7%C3%A3o-de-Servidores-e-Rede-768x576.jpg",
            prazo: "2 semanas",
            price: 2800
          },
          {
            id: 10,
            nome: "Desenvolvimento de Blogs",
            descricao: "Criação de blogs personalizados com recursos avançados",
            imageUrl: "https://www.hostinger.com.br/tutoriais/wp-content/uploads/sites/12/2018/07/melhor-plataforma-para-criar-blog.png",
            prazo: "3 meses",
            price: 4000
          }
    ];
    
    public constructor(
        private readonly userState: UserState,
        private readonly productState: ProductState,
        private readonly paymentState: PaymentState
    ) {}

    updateLoginStatus() {
        this.userState.setLogged(sessionStorage.getItem('user') !== null)
    }
    
    isLoggedIn() {
        return this.userState.getLoggedObserver();
    }
    
    login(user: string) {
        sessionStorage.setItem('user', user);
        this.userState.setLogged(true);
    }

    logout() {
        sessionStorage.clear();
        this.userState.setLogged(false);
    }

    getProducts(): Product[] {
        return this.products;
    }

    getDetails(id: string): Product {
        return this.products.find(product => product.id === +id) as Product;
    }

    setUpPayment(id: string) {

    }
}