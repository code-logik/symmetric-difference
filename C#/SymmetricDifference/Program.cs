using System;

namespace SymmetricDifferenceAlgorithm
{
    internal class Program
    {
        private static int[][] _SYMMETRIC_DIFFERENCE_SETS = new int[][]
        {
            new int[] { 3, 3, 3, 2, 5 },
            new int[] { 2, 1, 5, 7 },
            new int[] { 3, 4, 6, 6 },
            new int[] { 1, 2, 3 },
            new int[] { 5, 3, 9, 8 },
            new int[] { 1 }
        };

        private static int[] _SYMMETRIC_DIFFERENCE_EXPECTED = { 1, 2, 4, 5, 6, 7, 8, 9 };

        static void Main(string[] args)
        {
            bool run = true;

            do
            {
                Console.WriteLine("\n\n------------------------");
                Console.WriteLine("1. Symmetric Difference");
                Console.WriteLine("2. Exit");
                Console.WriteLine("------------------------");
                Console.Write("Enter Selection: ");

                switch (Convert.ToInt32(Console.ReadLine()))
                {
                    case 1:
                        SymmetricDifference symmetricDifference = new SymmetricDifference(_SYMMETRIC_DIFFERENCE_SETS);
                        Console.WriteLine($"\n\nCalculated: [{string.Join(", ", symmetricDifference.Calculate())}]");
                        Console.WriteLine($"Expected:   [{string.Join(", ", _SYMMETRIC_DIFFERENCE_EXPECTED)}]");
                        break;

                    case 2:
                        run = false;
                        break;
                }

            } while (run);
        }
    }
}
