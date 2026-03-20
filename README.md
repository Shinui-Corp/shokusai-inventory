# React + FastAPI フルスタックプロジェクト

## 構成

- `frontend/` — React (Vite + TypeScript) on port 5173
- `backend/` — FastAPI (Python) on port 8000

## 起動方法

### Docker Compose（推奨）

```bash
docker compose up --build
```

### 個別起動

**Backend:**

```bash
cd backend
pip install -r requirements.txt
uvicorn main:app --reload --port 8000
```

**Frontend:**

```bash
cd frontend
npm install
npm run dev
```

## API

| Method | Endpoint     | Description          |
| ------ | ------------ | -------------------- |
| GET    | `/api/hello` | サンプルエンドポイント |
