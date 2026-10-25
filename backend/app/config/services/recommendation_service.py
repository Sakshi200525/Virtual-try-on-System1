class RecommendationService:
    @staticmethod
    def get_recommendations(user_id: int):
        return [{"item_id": 1, "name": "Casual Jacket", "match_score": "95%"}]