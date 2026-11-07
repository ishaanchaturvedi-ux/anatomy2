# AnatomyFit — Phase 2

> 3D Human Anatomy Explorer + Intelligent Exercise & Fitness Module

---

## Prerequisites

| Tool | Minimum Version |
|------|-----------------|
| Node.js | 18+ |
| JDK | 21+ (tested on JDK 26) |
| PowerShell | Any (Windows) |

---

## Quick Start

### 1 — Start the Java Backend

```powershell
# From the anatomy2 root folder:
cd backend
.\mvnw.cmd spring-boot:run
```

- Starts on **http://localhost:8080**
- SQLite database is auto-created at `backend/data/anatomyfit.db`
- All 106 exercises are seeded on the **first run only** (idempotent)

> If you get a PowerShell execution policy error, run this first:
> ```powershell
> Set-ExecutionPolicy -Scope Process Bypass -Force
> ```

### 2 — Start the Next.js Frontend

```powershell
# From the anatomy2 root folder (in a separate terminal):
npm install   # only needed first time
npm run dev
```

- Opens on **http://localhost:3000**

---

## Project Structure

```
anatomy2/
├── backend/                        ← Spring Boot Java backend
│   ├── mvnw.cmd                    ← Maven wrapper (no global Maven needed)
│   ├── pom.xml                     ← Dependencies (Spring Boot 3.3, SQLite, Hibernate)
│   ├── data/anatomyfit.db          ← SQLite DB (auto-created on first run)
│   └── src/main/java/com/anatomyfit/backend/
│       ├── AnatomyFitApplication.java
│       ├── config/
│       │   ├── CorsConfig.java     ← Allows localhost:3000/3001
│       │   └── GlobalExceptionHandler.java
│       ├── controller/             ← REST endpoints
│       │   ├── ExerciseController.java
│       │   ├── RecommendationController.java
│       │   ├── RoutineController.java
│       │   ├── WorkoutController.java
│       │   └── DashboardController.java
│       ├── service/                ← Business logic
│       ├── entity/                 ← JPA models
│       ├── repository/             ← Spring Data JPA repos
│       ├── dto/                    ← API payloads
│       └── seed/DataSeeder.java    ← Loads exercises.json on first run
│
├── src/                            ← Next.js frontend
│   ├── app/
│   │   ├── anatomy/                ← 3D anatomy viewer
│   │   ├── exercises/              ← Exercise library
│   │   ├── workouts/               ← Routine builder & session logger
│   │   ├── recommendations/        ← AI-scored exercise suggestions
│   │   └── dashboard/              ← Progress stats
│   ├── services/
│   │   ├── apiClient.ts            ← Fetch wrapper for backend calls
│   │   └── exerciseService.ts      ← Exercise API (with local fallback)
│   └── components/layout/Navbar.tsx
```

---

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/v1/exercises` | List / filter / search exercises |
| GET | `/api/v1/exercises/{id}` | Single exercise |
| GET | `/api/v1/exercises/muscle/{muscleId}` | Exercises for a muscle |
| POST | `/api/v1/recommendations` | Get scored exercise recommendations |
| GET | `/api/v1/routines` | List workout routines |
| POST | `/api/v1/routines` | Create routine |
| PUT | `/api/v1/routines/{id}` | Update routine |
| DELETE | `/api/v1/routines/{id}` | Delete routine |
| GET | `/api/v1/workouts` | List workout sessions |
| POST | `/api/v1/workouts` | Log a workout session |
| PUT | `/api/v1/workouts/{id}` | Update session |
| GET | `/api/v1/dashboard` | Dashboard summary stats |

### Example — Get exercises for chest:
```bash
curl http://localhost:8080/api/v1/exercises/muscle/pectoralis-major
```

### Example — Get recommendations:
```bash
curl -X POST http://localhost:8080/api/v1/recommendations \
  -H "Content-Type: application/json" \
  -d '{"muscleId":"quadriceps","goal":"hypertrophy","availableEquipment":["Barbell","Dumbbell"]}'
```

---

## Running Backend Tests

```powershell
cd backend
.\mvnw.cmd test
```

---

## Environment Variables (Frontend)

Create a `.env.local` file in the `anatomy2/` root if you want to override the backend URL:

```env
NEXT_PUBLIC_BACKEND_URL=http://localhost:8080/api/v1
```

Default is already `http://localhost:8080/api/v1`.

---

## Notes

- **Graceful degradation**: If the backend is offline, the Exercises page falls back to the 106 local exercises automatically.
- **No auth required**: This is a single-user local demo; no login is needed.
- **SQLite location**: `backend/data/anatomyfit.db` — add this to `.gitignore` to avoid committing the DB file.
- **Ports**: Frontend = 3000, Backend = 8080. Both must be running for full Phase 2 features.
