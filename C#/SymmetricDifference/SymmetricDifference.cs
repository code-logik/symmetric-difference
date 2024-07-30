using System.Collections.Generic;
using System.Linq;

namespace SymmetricDifferenceAlgorithm
{
    internal class SymmetricDifference
    {
        private int[][] _SETS;
        private List<int> _SYMMETRIC_DIFFERENCE;

        public SymmetricDifference(int[][] sets)
        {
            this._SETS = sets;
            this._SYMMETRIC_DIFFERENCE = _SETS[0].ToList();
        }

        public List<int> Calculate()
        {
            for (int i = 1; i < _SETS.Length; i++)
            {
                _SYMMETRIC_DIFFERENCE = Difference(_SYMMETRIC_DIFFERENCE, _SETS[i]);
            }

            return _SYMMETRIC_DIFFERENCE;
        }

        private bool IsUnique(int control, List<int> symmetric_difference)
        {
            if (symmetric_difference.Contains(control))
            {
                return false;
            }
            else
            {
                return true;
            }
        }

        private List<int> Difference(List<int> set1, int[] set2)
        {
            List<int> symmetric_difference = set1.AsQueryable().Distinct().ToList();
            List<int> group = set2.ToList().AsQueryable().Distinct().ToList();

            for (int i = 0; i < group.Count; i++)
            {
                if (IsUnique(group[i], symmetric_difference))
                {
                    symmetric_difference.Add(group[i]);
                }
                else
                {
                    symmetric_difference.Remove(group[i]);
                }
            }

            symmetric_difference.Sort();
            return symmetric_difference;
        }
    }
}
