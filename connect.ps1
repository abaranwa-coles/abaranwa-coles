# Create a array of inline computer names
$computers = @("computer1","computer2","computer3")
# iterate through the array and connect to each computer
foreach ($computer in $computers) {
    # connect to the computer
    Enter-PSSession -ComputerName $computer
    # run a command on the remote computer
    Get-Process
    # exit the remote session
    Exit-PSSession
}

