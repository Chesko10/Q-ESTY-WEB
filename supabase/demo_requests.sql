create table if not exists public.demo_requests (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  hotel_name text not null,
  message text,
  created_at timestamptz not null default now()
);

alter table public.demo_requests enable row level security;
