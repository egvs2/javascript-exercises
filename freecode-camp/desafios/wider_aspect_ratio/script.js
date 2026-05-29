function getWiderAspectRatio(a, b) {
  function getMDC(x, y) {
    while (y !== 0) {
      let temp = y;
      y = x % y;
      x = temp;
    }
    return x;
  }

  const [larguraA, alturaA] = a.split('x').map(Number);
  const [larguraB, alturaB] = b.split('x').map(Number);

  // Multiplicação cruzada (larguraA * alturaB vs larguraB * alturaA) em vez de divisão decimal.
  // Isso evita qualquer erro de precisão de ponto flutuante em JavaScript.

  let largurafinal, alturafinal;
  if (larguraA * alturaB >= larguraB * alturaA) {
    largurafinal = larguraA;
    alturafinal = alturaA;
  } else {
    largurafinal = larguraB;
    alturafinal = alturaB;
  }

  const mdc = getMDC(largurafinal, alturafinal);
  return `${largurafinal / mdc}:${alturafinal / mdc}`;
}

// --- EXECUÇÃO DOS SEUS TESTES ---
console.log(getWiderAspectRatio("1920x1080", "800x600"));   // Retorna: "16:9"   (1.777... vs 1.333...)
console.log(getWiderAspectRatio("1080x1350", "2048x1536")); // Retorna: "4:3"    (0.8 vs 1.333...)
console.log(getWiderAspectRatio("640x480", "2440x1220"));   // Retorna: "2:1"    (1.333... vs 2.0)
console.log(getWiderAspectRatio("360x640", "1080x1920"));   // Retorna: "9:16"   (Empate: 0.5625, retorna o primeiro reduzido)
console.log(getWiderAspectRatio("3440x1440", "2048x858"));  // Retorna: "43:18"  (2.3888... vs 2.3869...)
console.log(getWiderAspectRatio("12345x61234", "12534x51234")); // Retorna: "2089:8539" (0.2016 vs 0.2446)