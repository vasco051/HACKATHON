export type TQuestion = {
  id: number;
  question: string;
  answers: TAnswer[];
};

export type TAnswer = {
  id: number;
  answer: string;
  isCorrect: boolean;
};

export const questionList: TQuestion[] = [
  {
    id: 1,
    question:
      'Какой язык программирования используется для разработки веб-приложений на стороне клиента?',
    answers: [
      {
        id: 1,
        answer: 'Python',
        isCorrect: false,
      },
      {
        id: 2,
        answer: 'JavaScript',
        isCorrect: true,
      },
      {
        id: 3,
        answer: 'Java',
        isCorrect: false,
      },
      {
        id: 4,
        answer: 'C#',
        isCorrect: false,
      },
    ],
  },
  {
    id: 2,
    question: 'Что такое ООП?',
    answers: [
      {
        id: 1,
        answer: 'Объектно-ориентированное программирование',
        isCorrect: true,
      },
      {
        id: 2,
        answer: 'Оперативное программирование',
        isCorrect: false,
      },
      {
        id: 3,
        answer: 'Общее программирование',
        isCorrect: false,
      },
      {
        id: 4,
        answer: 'Ограниченное программирование',
        isCorrect: false,
      },
    ],
  },
  {
    id: 3,
    question:
      'Какой из следующих методов используется для добавления элемента в массив в JavaScript?',
    answers: [
      {
        id: 1,
        answer: 'push()',
        isCorrect: false,
      },
      {
        id: 2,
        answer: 'unshift()',
        isCorrect: true,
      },
      {
        id: 3,
        answer: 'insert()',
        isCorrect: false,
      },
      {
        id: 4,
        answer: 'add()',
        isCorrect: false,
      },
    ],
  },
  {
    id: 4,
    question: 'Какой протокол используется для передачи гипертекстовых данных?',
    answers: [
      {
        id: 1,
        answer: 'HTTP',
        isCorrect: true,
      },
      {
        id: 2,
        answer: 'FTP',
        isCorrect: false,
      },
      {
        id: 3,
        answer: 'SMTP',
        isCorrect: false,
      },
      {
        id: 4,
        answer: 'TCP',
        isCorrect: false,
      },
    ],
  },
  {
    id: 5,
    question:
      'Какой язык программирования используется для разработки Android-приложений?',
    answers: [
      {
        id: 1,
        answer: 'Swift',
        isCorrect: false,
      },
      {
        id: 2,
        answer: 'Kotlin',
        isCorrect: true,
      },
      {
        id: 3,
        answer: 'Ruby',
        isCorrect: false,
      },
      {
        id: 4,
        answer: 'PHP',
        isCorrect: false,
      },
    ],
  },
  {
    id: 6,
    question: 'Что такое Git?',
    answers: [
      {
        id: 1,
        answer: 'Язык программирования',
        isCorrect: false,
      },
      {
        id: 2,
        answer: 'Система контроля версий',
        isCorrect: true,
      },
      {
        id: 3,
        answer: 'Система управления проектами',
        isCorrect: false,
      },
      {
        id: 4,
        answer: 'Редактор кода',
        isCorrect: false,
      },
    ],
  },
  {
    id: 7,
    question: 'Что такое переменная?',
    answers: [
      {
        id: 1,
        answer: 'Константа',
        isCorrect: false,
      },
      {
        id: 2,
        answer: 'Место для хранения данных',
        isCorrect: true,
      },
      {
        id: 3,
        answer: 'Функция',
        isCorrect: false,
      },
      {
        id: 4,
        answer: 'Класс',
        isCorrect: false,
      },
    ],
  },
  {
    id: 8,
    question: 'Какой из следующих языков является компилируемым?',
    answers: [
      {
        id: 1,
        answer: 'C++',
        isCorrect: true,
      },
      {
        id: 2,
        answer: 'JavaScript',
        isCorrect: false,
      },
      {
        id: 3,
        answer: 'Python',
        isCorrect: false,
      },
      {
        id: 4,
        answer: 'PHP',
        isCorrect: false,
      },
    ],
  },
  {
    id: 9,
    question: 'Какой символ используется для начала комментария в Python?',
    answers: [
      {
        id: 1,
        answer: '//',
        isCorrect: false,
      },
      {
        id: 2,
        answer: '#',
        isCorrect: true,
      },
      {
        id: 3,
        answer: '/*',
        isCorrect: false,
      },
      {
        id: 4,
        answer: '<!--',
        isCorrect: false,
      },
    ],
  },
  {
    id: 10,
    question: 'Что такое API?',
    answers: [
      {
        id: 1,
        answer: 'Интерфейс программирования приложений',
        isCorrect: true,
      },
      {
        id: 2,
        answer: 'Автоматизированный программный интерфейс',
        isCorrect: false,
      },
      {
        id: 3,
        answer: 'Анализ программного интерфейса',
        isCorrect: false,
      },
      {
        id: 4,
        answer: 'Аппаратный программный интерфейс',
        isCorrect: false,
      },
    ],
  },
  {
    id: 11,
    question: 'Какой из этих языков является языком разметки?',
    answers: [
      {
        id: 1,
        answer: 'HTML',
        isCorrect: true,
      },
      {
        id: 2,
        answer: 'Java',
        isCorrect: false,
      },
      {
        id: 3,
        answer: 'C#',
        isCorrect: false,
      },
      {
        id: 4,
        answer: 'Python',
        isCorrect: false,
      },
    ],
  },
  {
    id: 12,
    question: 'Что такое массив?',
    answers: [
      {
        id: 1,
        answer: 'Единичный элемент данных',
        isCorrect: false,
      },
      {
        id: 2,
        answer: 'Коллекция элементов данных',
        isCorrect: true,
      },
      {
        id: 3,
        answer: 'Тип данных',
        isCorrect: false,
      },
      {
        id: 4,
        answer: 'Функция',
        isCorrect: false,
      },
    ],
  },
  {
    id: 13,
    question: 'Какой из этих языков используется для серверной разработки?',
    answers: [
      {
        id: 1,
        answer: 'HTML',
        isCorrect: false,
      },
      {
        id: 2,
        answer: 'Node.js',
        isCorrect: true,
      },
      {
        id: 3,
        answer: 'CSS',
        isCorrect: false,
      },
      {
        id: 4,
        answer: 'JavaScript',
        isCorrect: false,
      },
    ],
  },
  {
    id: 14,
    question: 'Какой метод используется для отправки данных на сервер в AJAX?',
    answers: [
      {
        id: 1,
        answer: 'GET',
        isCorrect: false,
      },
      {
        id: 2,
        answer: 'POST',
        isCorrect: true,
      },
      {
        id: 3,
        answer: 'PUT',
        isCorrect: false,
      },
      {
        id: 4,
        answer: 'DELETE',
        isCorrect: false,
      },
    ],
  },
  {
    id: 15,
    question: 'Какой оператор используется для сравнения в JavaScript?',
    answers: [
      {
        id: 1,
        answer: '=',
        isCorrect: false,
      },
      {
        id: 2,
        answer: '==',
        isCorrect: true,
      },
      {
        id: 3,
        answer: '===',
        isCorrect: false,
      },
      {
        id: 4,
        answer: '!=',
        isCorrect: false,
      },
    ],
  },
  {
    id: 16,
    question: 'Что такое классы в программировании?',
    answers: [
      {
        id: 1,
        answer: 'Шаблоны для создания объектов',
        isCorrect: true,
      },
      {
        id: 2,
        answer: 'Типы данных',
        isCorrect: false,
      },
      {
        id: 3,
        answer: 'Переменные',
        isCorrect: false,
      },
      {
        id: 4,
        answer: 'Функции',
        isCorrect: false,
      },
    ],
  },
  {
    id: 17,
    question: 'Какой из этих языков не является объектно-ориентированным?',
    answers: [
      {
        id: 1,
        answer: 'C',
        isCorrect: true,
      },
      {
        id: 2,
        answer: 'Java',
        isCorrect: false,
      },
      {
        id: 3,
        answer: 'C++',
        isCorrect: false,
      },
      {
        id: 4,
        answer: 'Python',
        isCorrect: false,
      },
    ],
  },
];
