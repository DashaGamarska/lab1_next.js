import { fetchPost } from '@/server/fetcher';

export interface RecentArticlesProps {
    id: number;
}

export const FavoriteArticle: React.FC<RecentArticlesProps> = async ({ id }) => {
  await  fetchPost(id);
    return (
        <div className="max-w-48">
            <h2 className="text-xl mb-2">
                favorite_articles.title
            </h2>
            <p className="">
                favorite_articles.body
            </p>
        </div>
    );
};