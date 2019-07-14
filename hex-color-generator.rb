def createColor
  hexadecimalIntegers = ["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"]
  color = hexadecimalIntegers.sample(6).join("")
  "Your new hex color is ##{color}"
end
