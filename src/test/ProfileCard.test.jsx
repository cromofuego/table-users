import { titleCase } from '../components/ProfileCard';

describe('funciones del del componente ProfileCard', () => {
  describe('titleCase', () => {
    test('debe retornar un string', () => {
      const result = titleCase('Un valor');
      expect(typeof result).toBe('string');
    });
    test('debe retornar el string tranformado', () => {
      expect(titleCase('en un lugar de la mancha')).toBe(
        'En Un Lugar De La Mancha'
      );
    });

    test('debe devolver un string cavio si recibe un string vacio', () => {
      expect(titleCase('')).toBe('');
    });
  });
});
