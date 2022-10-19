// Linear search algorithm


#include <stdio.h>
#include <stdlib.h>
#include <math.h>




int linearSearch(int arr[], int n, int x)
{
    int i;
    for (i = 0; i < n; i++)
    {
        if (arr[i] == x)
        {

            return i;

        }
    }
    return -1;






