# String Calculator - TDD Implementation

This project implements a String Calculator following Test-Driven Development (TDD) principles. The calculator takes a string of numbers as input and returns their sum based on specific rules.

## Features

The String Calculator supports the following operations:

1. Empty string returns 0
2. Basic number addition with comma and newline delimiters
3. Custom delimiter support using the format `//[delimiter]\n[numbers]`
4. Negative number validation
5. Multiple number addition

## Test Cases and Results

| Test Case | Input | Expected Output | Description |
|-----------|-------|----------------|-------------|
| Empty String | `""` | `0` | Returns 0 for empty string input |
| Single Number | `"1"` | `1` | Returns the number itself when only one number is provided |
| Two Numbers | `"1,2"` | `3` | Adds two numbers separated by comma |
| Multiple Numbers | `"1,2,3,4,5"` | `15` | Adds multiple numbers separated by commas |
| Newline Delimiter | `"1\n2,3"` | `6` | Supports both comma and newline as delimiters |
| Custom Delimiter | `"//;\n1;2"` | `3` | Supports custom delimiter specified in the format `//[delimiter]\n[numbers]` |
| Negative Numbers | `"1,-2,3"` | `Error: negative numbers not allowed: -2` | Throws error when negative numbers are present |
| Multiple Negative Numbers | `"1,-2,-3"` | `Error: negative numbers not allowed: -2,-3` | Throws error listing all negative numbers found |

## Usage

```typescript
import { add } from './string-calculator';

// Basic usage
console.log(add("1,2,3")); // Output: 6

// With custom delimiter
console.log(add("//;\n1;2;3")); // Output: 6

// With newlines
console.log(add("1\n2,3")); // Output: 6
```

## Implementation Details

The implementation follows these key rules:
1. Numbers are separated by commas and/or newlines
2. Custom delimiters can be specified using the format `//[delimiter]\n[numbers]`
3. Negative numbers are not allowed and will throw an error
4. Empty strings return 0
5. The calculator can handle multiple numbers

## Development

This project was developed using TypeScript and follows Test-Driven Development practices. Each feature was implemented after writing and failing the corresponding test case.

## Running Tests

To run the tests, use the following command:

```bash
npm test
``` 