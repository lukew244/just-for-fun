def next_bigger(n)
#An algorithm to return the next biggest number using the same digits, e.g. '2017' -> '2071'
#Returns -1 if not passed an integer 0 or greater, or if it is already the largest, e.g. '444'

  #converts to array and returns -1 if it is already the largest possible number
  array = n.to_s.chars
  return -1 if !n.is_a? Integer || n < 0 || array == array.sort.reverse

  #starting from the right, finds the first pair of digits where the left is smaller
  idx = array.length-2

  while array[idx] >= array[idx+1]
    idx -= 1
  end

  first_smaller_digit = array[idx]

  #slices the array in two, sorting the right half (including the smaller digit)
  right = array.slice!(idx..array.length).sort
  left = array

  #finds the first digit larger than first_smaller_digit and pushes it to the left array
  idx = 0

  while right[idx] <= first_smaller_digit
    idx += 1
  end

  first_digit_larger = right.delete_at(idx)
  left.push(first_digit_larger)

  #rejoins the two arrays and converts back to an integer to return
  (left + right).join("").to_i
end
