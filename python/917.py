class Solution:
    def reverseOnlyLetters(self, s: str) -> str:
        letters = ''
        res = ''
        i = len(letters) - 1
        for letter in s:
            if letter.isalpha():
                letters += letter
        print(letters)
        for char in s:
            if not char.isalpha():
                res += char
            else:
                res += letters[i]
                i -= 1
        return res
    
print(Solution().reverseOnlyLetters("a-bC-dEf-ghIj"))