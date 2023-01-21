# habits-tracker
Projeto FullStack criado na 11º edição da Rocketseat NLW. Uma aplicação voltada a ajudar usuário a criar e monitorar novos hábitos que desejam seguir em suas rotinas. Foram desenvlvidas as versões web e mobile da aplicação durante o NLW Setup da Rocketseat.
```
Além do projeto original desenvolvido durante o evento, estou personalizando um pouco adicionando autenticação e notificações push.
```



##Tecnologias

<ul>
    <li><a href="https://reactjs.org/"><img src=assets/logos/react.svg/> React</a></li>
    <li><a href="https://reactnative.dev/"><img src=assets/logos/react.svg/> React Native</a></li>
    <li><a href="https://www.typescriptlang.org/"><img src=assets/logos/typescript.png/> Typescript</a></li>
    <li><a href="https://zod.dev/"><img src=assets/logos/zod.svg/> zod</a></li>
    <li><a href="https://www.prisma.io/"><img src=assets/logos/prisma.png />Prisma</a></li>
    <li><a href="https://www.radix-ui.com/"><img src=assets/logos/radix.png />Radix</a></li>
    <li><a href="https://tailwindcss.com/"><img src=assets/logos/tailwind.png />tailwindcss</a></li>
</ul>


##Visão do Projeto

<section class="container">
    <h3>Página Inicial</h3>
    <div class="screen">
        <img src="assets/home.png" class="web"/>
        <img src="assets/home-mobile.jpg" class="mobile"/>
    </div>
    <h3>Criar Novo Hábito</h3>
    <div class="screen">
        <img src="assets/new-habit.png" />
        <img src="assets/new-mobile.jpg" />
    </div> 
</section>


<style>
    
    ul {
        list-style-type: none;       
    }

    li {
        margin-left: -24px;
    }

    li img {
        width: 20px;
    }

    li a {
        text-decoration: none !important;
        color:  !important;
    }

    li, li a {
        display: flex;
        justify-content: start;
        align-items: center;
        gap: 10px;
    }

    section.container {
        display: flex;  
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    div.screen {
       display: flex;
       flex-direction: row;
       gap: 4px;
    }    

    img {
        display: block;
        max-width:1024px;
        max-height:240px;
        width: auto;
        height: auto;
    }
</style>