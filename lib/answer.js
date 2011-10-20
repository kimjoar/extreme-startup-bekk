var _ = require('underscore');

var fib = function(num) {
  if (num == 1 || num == 2) {
    return 1;
  }

  var m_0 = 1
    , m_1 = 1
    , i;

  for (i = 0; i < num - 2; i++) {
    tmp = m_0
    m_0 = m_1
    m_1 = tmp + m_1
  }
  return m_1;
}

function isprime(num){
  if (num == 1 || num == 2 || num == 3) {
    return true;
  }

  for (var i = 2; i <= Math.ceil(num/2); i++) {
    if (num % i == 0) {
      return false;
    }
  }

  return true;
}


var questions = [
  {
    regexp: /.+: what is your name/,
    answer: function(m, session) {
      return "SB1 ftw";
    }
  },
  {
    regexp: /.+: which city is the Eiffel tower in/,
    answer: function(m, session) {
      return "paris";
    }
  },
  {
    regexp: /.+: what is (\d+) plus (\d+)$/,
    answer: function(m, session) {
      return parseInt(m[1]) + parseInt(m[2]);
    }
  },
  {
    regexp: /.+: what is (\d+) plus (\d+) plus (\d+)$/,
    answer: function(m, session) {
      return parseInt(m[1]) + parseInt(m[2]) + parseInt(m[3]);
    }
  },
  {
    regexp: /.+: what is (\d+) multiplied by (\d+) plus (\d+)$/,
    answer: function(m, session) {
      return parseInt(m[1]) * parseInt(m[2]) + parseInt(m[3]);
    }
  },
  {
    regexp: /.+: what is (\d+) plus (\d+) multiplied by (\d+)$/,
    answer: function(m, session) {
      return (parseInt(m[1]) + parseInt(m[2])) * parseInt(m[3]);
    }
  },
  {
    regexp: /.+: what is (\d+) to the power of (\d+)$/,
    answer: function(m, session) {
      return Math.pow(m[1], m[2]);
    }
  },
  {
    regexp: /.+: what is (\d+) minus (\d+)$/,
    answer: function(m, session) {
      return parseInt(m[1]) - parseInt(m[2]);
    }
  },
  {
    regexp: /.+: what is (\d+) multiplied by (\d+)$/,
    answer: function(m, session) {
      if (parseInt(m[1]) == 0 || parseInt(m[2]) == 0) {
        return 0;
      }
      return parseInt(m[1]) * parseInt(m[2]);
    }
  },
  {
    regexp: /.+: my name is (.+). what is my name/,
    answer: function(m, session) {
      session.my_name = m[1];
      return m[1];
    }
  },
  {
    regexp: /.+: what is my name/,
    answer: function(m, session) {
      return session.my_name;
    }
  },
  {
    regexp: /.+: what colour is a banana/,
    answer: function(m, session) {
      return 'yellow';
    }
  },
  {
    regexp: /.+: who played James Bond in the film Dr No/,
    answer: function(m, session) {
      return 'sean connery';
    }
  },
  {
    regexp: /.+: what is the twitter id of the organizer of this dojo/,
    answer: function(m, session) {
      return "olemartin";
    }
  },
  {
    regexp: /.+: which of the following numbers is the largest: (.*)/,
    answer: function(m, session) {
      return _.max(m[1].split(","));
    }
  },
  {
    regexp: /.+: which of the following numbers are primes: (.*)/,
    answer: function(m, session) {
      var numbers = m[1].split(",");
      n = _.detect(numbers, function(num) {
        return isprime(parseInt(num, 10));
      });
      return parseInt(n, 10);
    }
  },
  {
    regexp: /.+: what currency did Spain use before the Euro/,
    answer: function(m, session) {
      return "peseta";
    }
  },
  {
    regexp: /.+: what is the (\d+)th number in the Fibonacci sequence/,
    answer: function(m, session) {
      return fib(m[1]);
    }
  },
  {
    regexp: /.+: who is the Prime Minister of Great Britain/,
    answer: function(m, session) {
      return "david cameron";
    }
  },
  {
    regexp: /.+: which of the following numbers is both a square and a cube: (.*)/,
    answer: function(m, session) {
      var numbers = m[1].split(",");

      var num = _.detect(numbers, function(num) {
        num = parseInt(num, 10);
        sqrt = Math.sqrt(num).toFixed(2);
        cube = Math.pow(num, 1/3).toFixed(2);

        return Math.floor(sqrt) == sqrt && Math.floor(cube) == cube;
      });

      return parseInt(num, 10) || "";
    }
  },
]

module.exports = function (q, session) {
  var i
    , length = questions.length
    , question
    , m
    ;

  for (i = 0; i < length; i++) {
    question = questions[i];

    m = q.match(question.regexp);
    if (m) {
      return question.answer(m, session);
    }
  }
}
