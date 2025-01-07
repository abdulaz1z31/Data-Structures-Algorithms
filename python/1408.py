class Solution:
    def stringMatching(self, words: list[str]) -> list[str]:
        arr = []
        for j in range(len(words)):
            for i in range(len(words)):
                if words[j] in words[i] and i != j and words[j] not in arr:
                    arr.append(words[j])
        return arr
print(Solution().stringMatching(["mass","as","hero","superhero"]))