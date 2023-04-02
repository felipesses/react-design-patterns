## CONTROLLED X UNCONTROLLED COMPONENTS

- Em React, controlled components e uncontrolled components são duas abordagens diferentes para lidar com a manipulação de elementos de formulário (como input, textarea, select, etc.) em um aplicativo.

Controlled Components:
Um controlled component é um elemento de formulário cujo valor é totalmente controlado pelo React. Isso significa que o valor do componente é armazenado no estado do componente pai e é passado para o componente filho como uma propriedade. Quando o usuário interage com o componente, uma função de callback é acionada que atualiza o estado do componente pai e, por sua vez, atualiza o valor do componente filho.

Uncontrolled Components:
Um uncontrolled component é um elemento de formulário cujo valor é mantido pelo próprio DOM, em vez de ser controlado pelo React. Em outras palavras, o React não tem controle direto sobre o valor do componente e não há necessidade de criar um estado para atualizar o valor do componente.

Em resumo, a diferença principal entre controlled e uncontrolled components é que, em controlled components, o valor do componente é controlado pelo estado do React, enquanto em uncontrolled components, o valor é controlado pelo próprio DOM.
