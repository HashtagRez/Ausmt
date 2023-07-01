# Unit test for app.py

# name :fatemepormehdi
# student_number :981608113
# email :amirifateme573@gmail.com

from app import sum, minus

# test output value
def test_output_sum():
    check = sum(1, 2)
    assert check == 3

def test_output_minus():
    check = minus(5, 2)
    assert check == 3



# test output type
def test_type_sum():
    check = type(sum(1, 2))
    assert check == type(0)

def test_type_minus():
    check = type(minus(1, 2))
    assert check == type(0)


