class SymmetricDifference {
    
    [int[][]] $Private:sets
    [int[]] $Private:symmetric_difference

    [Void] LoadData([int[][]] $sets) {
        
        for ($i = 0; $i -lt $sets.Count; $i++) {
            
            switch ($i) {

                0 {
                    $this.symmetric_difference = ($sets[$i] | Sort-Object) | Get-Unique
                }

                Default {
                    $this.sets += ,@(($sets[$i] | Sort-Object) | Get-Unique)
                }
            }
        }
    }

    [bool] IsUnique ($number) {

        foreach ($value in $this.symmetric_difference) {

            if ($number -eq $value) {

                return $false
            }
        }

        return $true
    }
    
    [Void] Difference($set) {

        foreach ($number in $set) {

            if ($this.IsUnique($number)) {

                $this.symmetric_difference += $number
            }

            else {

                $this.symmetric_difference = $this.symmetric_difference | Where-Object { $_ -ne $number}
            }
        }
    }
    
    [Void] Calculate() {

        foreach ($set in $this.sets) {

            $this.Difference($set)
        }
    }

    [Void] PrintSymmetricDifference() {

        Write-Host ($this.symmetric_difference | Sort-Object)
    }
}

[int[][]] $sets = [int[][]]@(
    [int[]] ( 3, 3, 3, 2, 5 ),
    [int[]] ( 2, 1, 5, 7 ),
    [int[]] ( 3, 4, 6, 6 ),
    [int[]] ( 1, 2, 3 ),
    [int[]] ( 5, 3, 9, 8 ),
    [int[]] ( 1 )
)

$symdif = [SymmetricDifference]::new()
$symdif.LoadData($sets)
$symdif.Calculate()
$symdif.PrintSymmetricDifference()