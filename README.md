#Refactoring a code
We refactor the code of NyAndoMayah main.js of this [rice cooker cli](https://github.com/hei-school/cc-d4-rice-cooker-ci-NyAndoMayah/tree/feat/js) write in javascript and look the complexity of the code after the refactor

### Original Code

You can look the [main.js](https://github.com/hei-school/cc-d4-rice-cooker-ci-NyAndoMayah/blob/feat/js/js/main.js)

| Function           | Time Complexity | Space Complexity |
| ------------------ | --------------- | ---------------- |
| addRice            | O(1)            | O(1)             |
| cookRice           | O(1)            | O(1)             |
| steam              | O(1)            | O(1)             |
| keepWarm           | O(1)            | O(1)             |
| removeRice         | O(1)            | O(1)             |
| delaySync          | O(n)            | O(1)             |
| simulateRiceCooker | O(n \* n)       | O(1)             |

### Refactored Code

The [main.js](https://github.com/miharyjoe/test---cc/blob/main/main.js) after the refactor

| Function           | Time Complexity | Space Complexity |
| ------------------ | --------------- | ---------------- |
| addRice            | O(1)            | O(1)             |
| cookRice           | O(1)            | O(1)             |
| steam              | O(1)            | O(1)             |
| keepWarm           | O(1)            | O(1)             |
| removeRice         | O(1)            | O(1)             |
| delaySync          | O(n)            | O(1)             |
| performAction      | O(1)            | O(1)             |
| simulateRiceCooker | O(n)            | O(1)             |

NOTE:

#### Time Complexity:

- Definition:
  Time complexity is a measure of the amount of time an algorithm takes to complete as a function of the size of the input to the algorithm. It provides an estimate of the upper bound of the running time of an algorithm in relation to the input size.

- Notation:
  Time complexity is often expressed using big O notation (O), where O(f(n)) represents an upper bound on the growth rate of the running time with respect to the input size (n). It characterizes the worst-case behavior of an algorithm.

- Example:
  If an algorithm has a time complexity of O(n), it means the running time grows linearly with the size of the input.

#### Space Complexity:

- Definition:
  Space complexity is a measure of the amount of memory space an algorithm requires to execute as a function of the size of the input. It represents the total amount of memory space used, including both the auxiliary space (additional space used by the algorithm) and the input space.

- Notation:
  Similar to time complexity, space complexity is also expressed using big O notation (O), where O(f(n)) represents an upper bound on the growth rate of the space requirements with respect to the input size (n).

- Example:
  If an algorithm has a space complexity of O(1), it means the amount of memory used by the algorithm is constant and does not depend on the input size.

#### Summary:

##### Time Complexity:

Measures the efficiency of an algorithm in terms of the time it takes to complete as a function of input size. It focuses on how the running time grows with increasing input.

##### Space Complexity:

Measures the efficiency of an algorithm in terms of the memory space it requires to execute as a function of input size. It includes both auxiliary space and input space.
