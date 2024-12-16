class Solution:
    def truncateSentence(self, s: str, k: int) -> str:
        mas = s.split(' ')
        st = ' '.join(mas[:k])
        return st

print(Solution().truncateSentence("Hello how are you Contestant", 4))