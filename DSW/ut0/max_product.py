def check_data(number: str, span: int):
    if not number.isnumeric():
        raise ValueError("Not numeric characters are not allowed")
    if span > len(number):
        raise ValueError("Span number should be short than sequence length")
    if 0 >= span:
        raise ValueError("Span value should be greater or equal to 1 ")


def max_product(
    sequence: str,
    span: int,
    final_prod: int = 0,
    data_checked: bool = False,
):
    if not data_checked:
        check_data(sequence, span)
    if len(sequence) < span:
        return final_prod
    provisional_prod = 1
    for num in sequence[:span]:
        provisional_prod *= int(num)
    if provisional_prod > final_prod:
        final_prod = provisional_prod
    # If the exception has not been raised, the data is correct, so we checked value is now True.
    return max_product(sequence[1:], span, final_prod, True)

'''
def max_product(sequence: str, span: int) -> int:
    start = 0
    final_prod = 0
    for _ in range(len(sequence) + 1):
        sequence = sequence[start : start + span]
        if len(sequence) < span:
            break
        provisional_prod = 1
        for num in sequence:
            provisional_prod *= int(num)
        if provisional_prod > final_prod:
            final_prod = provisional_prod
        start += 1
    return final_prod
'''
