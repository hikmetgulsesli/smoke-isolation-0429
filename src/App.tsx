import { useHabits } from './hooks/useHabits';
import { ErrorBoundary } from './components/ErrorBoundary';
import { BosDurumYeniBaslayanlarIcin } from './screens/BosDurumYeniBaslayanlarIcin';
import { AnaSayfaAliskanlikListesi } from './screens/AnaSayfaAliskanlikListesi';
import { HataDurumuKayitSorunu } from './screens/HataDurumuKayitSorunu';

export default function App() {
  const { habits, error, addHabit, toggleHabit, deleteHabit, clearError } = useHabits();

  const hasHabits = habits.length > 0;
  const isStorageError = error?.includes('kaydedilemedi') ?? false;

  return (
    <ErrorBoundary>
      <div data-setfarm-root="us-005" className="min-h-screen bg-background text-on-background flex flex-col font-body-md antialiased selection:bg-primary-container selection:text-on-primary-container">
        {isStorageError ? (
          <HataDurumuKayitSorunu
            habits={habits}
            onAddHabit={addHabit}
            onToggleHabit={toggleHabit}
            onDeleteHabit={deleteHabit}
            error={error}
            onClearError={clearError}
          />
        ) : hasHabits ? (
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
    </ErrorBoundary>
  );
}
