import { useHabits } from './hooks/useHabits';
import { BosDurumYeniBaslayanlarIcin } from './screens/BosDurumYeniBaslayanlarIcin';
import { AnaSayfaAliskanlikListesi } from './screens/AnaSayfaAliskanlikListesi';

export default function App() {
  const { habits, error, addHabit, toggleHabit, deleteHabit, clearError } = useHabits();

  const hasHabits = habits.length > 0;

  return (
    <div data-setfarm-root="us-002" className="min-h-screen bg-background text-on-background flex flex-col font-body-md antialiased selection:bg-primary-container selection:text-on-primary-container">
      <input type="hidden" data-smoke-ignore />
      {hasHabits ? (
        <AnaSayfaAliskanlikListesi
          habits={habits}
          onAddHabit={addHabit}
          onToggleHabit={toggleHabit}
          onDeleteHabit={deleteHabit}
          error={error}
          onClearError={clearError}
        />
      ) : (
        <BosDurumYeniBaslayanlarIcin
          onAddHabit={addHabit}
          error={error}
          onClearError={clearError}
        />
      )}
    </div>
  );
}
