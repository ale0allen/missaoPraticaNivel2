// Função para trocar os valores de duas posições de um vetor
const swap = (arr, pos1, pos2) => {
    [arr[pos1], arr[pos2]] = [arr[pos2], arr[pos1]];
  };
  
  // Função para embaralhar os elementos de um vetor
  const shuffle = (arr, numSwaps) => {
    const len = arr.length;
    for (let i = 0; i < numSwaps; i++) {
      const pos1 = Math.floor(Math.random() * len);
      const pos2 = Math.floor(Math.random() * len);
      swap(arr, pos1, pos2);
    }
  };
  
  // Função para ordenar um vetor com Bubble Sort
  const bubble_sort = (arr) => {
    const len = arr.length;
    for (let i = 0; i < len; i++) {
      for (let j = 0; j < len - 1 - i; j++) {
        if (arr[j] > arr[j + 1]) {
          swap(arr, j, j + 1);
        }
      }
    }
  };
  
  // Função para ordenar um vetor com Selection Sort
  const selection_sort = (arr) => {
    const len = arr.length;
    for (let i = 0; i < len; i++) {
      let minIndex = i;
      for (let j = i + 1; j < len; j++) {
        if (arr[j] < arr[minIndex]) {
          minIndex = j;
        }
      }
      if (minIndex !== i) {
        swap(arr, i, minIndex);
      }
    }
  };
  
  // Função para ordenar um vetor com Quick Sort
  const quick_sort = (arr, start = 0, end = arr.length - 1) => {
    if (start >= end) return;
    const pivotIndex = partition(arr, start, end);
    quick_sort(arr, start, pivotIndex - 1);
    quick_sort(arr, pivotIndex + 1, end);
  };
  
  // Função de particionamento para o Quick Sort
  const partition = (arr, start, end) => {
    const pivotValue = arr[end];
    let pivotIndex = start;
    for (let i = start; i < end; i++) {
      if (arr[i] < pivotValue) {
        swap(arr, i, pivotIndex);
        pivotIndex++;
      }
    }
    swap(arr, pivotIndex, end);
    return pivotIndex;
  };

  function add() {
    const valor = document.getElementById('valor').value;
    const valores = document.getElementById('valores');
    const node = document.createElement('li');
    const textNode = document.createTextNode(valor);
    node.appendChild(textNode);
    valores.appendChild(node);
  }

  function ordenar() {
    const valores = document.getElementById('valores').children;
    const vetor = Array.from(valores).map(item => parseInt(item.innerHTML));
    const algoritmo = document.getElementById('algoritmo').value;
  
    // Escolher o algoritmo de ordenação adequado
    switch (algoritmo) {
      case 'bubble':
        bubble_sort(vetor);
        break;
      case 'selection':
        selection_sort(vetor);
        break;
      case 'quick':
        quick_sort(vetor);
        break;
    }
  
    // Atualizar a lista de valores
    document.getElementById('valores').innerHTML = vetor.map(item => `<li>${item}</li>`).join('');
  }

  function misturar() {
    const valores = document.getElementById('valores').children;
    const vetor = Array.from(valores).map(item => parseInt(item.innerHTML));
    shuffle(vetor);
  
    // Atualizar a lista de valores
    document.getElementById('valores').innerHTML = vetor.map(item => `<li>${item}</li>`).join('');
  }
  
  