# NexusCart – System Architecture

## Overview
NexusCart is a scalable e-commerce aggregation platform designed to compare prices,
track products, and integrate with multiple retailers.

## High-Level Components
- Frontend (Web / Extension)
- Backend API
- Scraper Services
- Database
- Cache Layer
- Notification Service

## Data Flow
1. User searches for a product
2. Backend queries scrapers and database
3. Results are normalized and returned
4. Frontend displays comparisons


