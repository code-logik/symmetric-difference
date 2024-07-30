#include <iostream>
#include <list>
using namespace std;

class SymmetricDifference
{
    struct SETS
    {
        list<int> set;
    };
    
    private:
    
        SETS* _SETS;
        list<int> _SYMMETRIC_DIFFERENCE;
        int _NUMBER_OF_SETS;

        bool IsUnique(int control)
        {
            for(int number : _SYMMETRIC_DIFFERENCE)
            {
                if(control == number)
                {
                    return false;
                }
            }

            return true;
        }

        void Difference(list<int> set)
        {
            for(int number : set)
            {
                if(IsUnique(number))
                {
                    _SYMMETRIC_DIFFERENCE.push_back(number);
                }
                else
                {
                    _SYMMETRIC_DIFFERENCE.remove(number);
                }
            }

            _SYMMETRIC_DIFFERENCE.sort();
        }        

    public:
        
        SymmetricDifference(list<list<int>> sets)
        {
            this->_NUMBER_OF_SETS = sets.size() - 1;
            this->_SETS = new SETS[_NUMBER_OF_SETS];
            int index = -1;

            for(list<int> set : sets)
            {
                switch(index)
                {
                    case -1:
                        this->_SYMMETRIC_DIFFERENCE = set;
                        _SYMMETRIC_DIFFERENCE.sort();
                        _SYMMETRIC_DIFFERENCE.unique();
                        break;
                    
                    default:
                        this->_SETS[index].set = set;
                        this->_SETS[index].set.sort();
                        this->_SETS[index].set.unique();
                        break;
                }

                index++;
            }
        }

        ~SymmetricDifference()
        {
            delete _SETS;
        }

        void Calculate()
        {
            for(int i = 0; i < _NUMBER_OF_SETS; i++)
            {
                Difference(_SETS[i].set);
            }
        }

        void PrintSymmetricDifference()
        {
            for(int number : _SYMMETRIC_DIFFERENCE)
            {
                cout << number << ", ";
            }

            cout << endl;
        }
};

main()
{
    list<list<int>> sets;
    sets.push_back({ 3, 3, 3, 2, 5 });  // 1
    sets.push_back({ 2, 1, 5, 7 });     // 2
    sets.push_back({ 3, 4, 6, 6 });     // 3
    sets.push_back({ 1, 2, 3 });        // 4
    sets.push_back({ 5, 3, 9, 8 });     // 5
    sets.push_back({ 1 });              // 6

    SymmetricDifference symmetricDifference = SymmetricDifference(sets);
    symmetricDifference.Calculate();
    symmetricDifference.PrintSymmetricDifference();

    return 0;
}