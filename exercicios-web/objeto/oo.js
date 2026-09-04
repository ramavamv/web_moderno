// CÓDIGO NÃO EXECUTÁVEL!!!

// Procedural
processamento(valor1, valor2, valor3)

 // OO
 objeto = {
     valor1,
     valor2,
     valor3,
     processamento() {
         // ...
     }
 }

 objeto.processamento() // Foco passou a ser o objeto

 // Principios importantes:
 // 1. abstracao
 // 2. encapsulamento
 // 3. herança (prototype)
 // 4. polimorfismo

 /** processo de evolução lento
 alto nível de acoplamento, quando tem muitos objetos que tem tudo dentro dele expostos, com baixo nível de encapsulamento que gera depência de todos os objetos tornando a evolução do sistema muito mais complicada.

 quando esconte detalhes de implementação e expôe ao mundo exterior apenas uma interface de comunicação a chance de haver acoplamento é menor pois boa parte do detalhe é interno

 preocupar com comunicação dos objetos que propriamente com a implementação interna deles, pois a implementação é possível mudar fácil, agora se a comunicação entre os objetos é excessiva qualquer coisa que muda no OBJ gera impato no outro, e assim por diante.

 */