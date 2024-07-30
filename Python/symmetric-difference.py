class SymmetricDifference:

    __sets = []
    __symmetric_difference = []

    def __init__(self, sets):

        for i in range(len(sets)):

            if i == 0:
                for number in sets[i]:
                     
                    self.__symmetric_difference.append(number)

                self.__symmetric_difference.sort()
                self.__symmetric_difference = list(set(self.__symmetric_difference))
            
            else:
                sets[i] = list(set(sets[i]))
                sets[i].sort()
                self.__sets.append(sets[i])

    
    def isUnique(self, number):

        for value in self.__symmetric_difference:

            if number == value:
                return False
        
        return True


    def difference(self, set):

        for number in set:

            if self.isUnique(number):
                self.__symmetric_difference.append(number)
            
            else:
                self.__symmetric_difference = [num for num in self.__symmetric_difference if num != number]
    

    def calculate(self):

        for set in self.__sets:

            self.difference(set)
    

    def printSymmetricDifference(self):

        self.__symmetric_difference.sort()
        print(self.__symmetric_difference) 


sets = [
    [ 3, 3, 3, 2, 5 ],
    [ 2, 1, 5, 7 ],
    [ 3, 4, 6, 6 ],
    [ 1, 2, 3 ],
    [ 5, 3, 9, 8 ],
    [ 1 ]
]

symdif = SymmetricDifference(sets)
symdif.calculate()
symdif.printSymmetricDifference()