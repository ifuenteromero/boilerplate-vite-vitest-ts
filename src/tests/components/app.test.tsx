import '@testing-library/jest-dom/vitest'; // Si no, da error los matchers ej toBeInTheDocument
import { render, screen } from '@testing-library/react';
import App from '../../components/App';
import { projectName } from '../../projectName';

describe('group', () => {
    it('group ', () => {
        render(<App />);
        const title = screen.getByRole('heading');
        expect(title).toBeInTheDocument();
        expect(title.textContent).toBe(projectName);
    });
});
