// #  binary search algorithm


#include <stdio.h>
#include <stdlib.h>
#include <math.h>



void jumpSort(int arr[], int n)
{
    int i, j, k, temp;
    int m = sqrt(n);
    for (i = 0; i < n; i += m)
    {
        for (j = i + 1; j < i + m; j++)
        {
            for (k = j + 1; k < i + m; k++)
            {
                if (arr[j] > arr[k])
                {
                    temp = arr[j];
                    arr[j] = arr[k];
                    arr[k] = temp;
                }
            }
        }
    }
    for (i = 0; i < n; i += m)
    {
        for (j = i + 1; j < n; j++)
        {
            temp = arr[i];
            k = i - 1;
            while (temp > arr[j] && k >= 0)
            {
                arr[k + 1] = arr[k];
                k--;
            }
            arr[k + 1] = temp;
        }
    }
}
