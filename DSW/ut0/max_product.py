def check_data(number: str, segment: int):
    if not number.isnumeric():
        raise ValueError("Caracteres no numericos")
    if segment > len(number):
        raise ValueError("Segmento mas grande que numero")
    if 0 >= segment:
        raise ValueError("Segmento negativo")


def max_product(
    number_to_check: str,
    segment: int,
    final_prod: int = 0,
    data_checked: bool = False,
):
    if not data_checked:
        check_data(number_to_check, segment)
    if len(number_to_check) < segment:
        return final_prod
    provisional_segment = number_to_check[:segment]
    provisional_prod = 1
    for num in provisional_segment:
        provisional_prod *= int(num)
    if provisional_prod > final_prod:
        final_prod = provisional_prod
    # Si no se ha levantado la excepcion los datos estan correctos, asi que pasamos checked directamente como True
    return max_product(number_to_check[1:], segment, final_prod, True)
