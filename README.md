# Jogo da Memória em React
- Deve funcionar nos navegadores Chrome, Firefox, Edge, Safari

## Descrição:
- Receber nome do usuário
- Jogo deve mostrar 24 botões
    - Cada botão tem uma imagem associada
    - Botão se torna a imagem associada quando clicado
    - Clicar em botões com a mesma imagem, faz os botões desaparecerem
    - Clicar em botões com imagens diferentes não muda o estado do jogo
- Contar número de tentativas
- Ao final, parabenizar o usuário
## O código em si:
- Caixa de input para nome, salvar em array
    - “ok” leva para a próxima tela
- Referenciar imagens em JS separado
- Dispor imagens na tela como um array
    - “embaralhar” array
- Imagens
    - “isFlipped”
    - “canFlip”
    - OnClick(), transforma imagem do botão
- Compara nome das imagens
    - remove botões em acerto
    - retorna ao estado normal em falha
- Se não restar nenhum botão, parabeniza jogador e pergunta se quer ir denovo
