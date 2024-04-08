import { fetchPost } from '@/server/fetcher';

export interface RecentArticlesProps {
    id: number;
}

export const RecentArticles: React.FC<RecentArticlesProps> =  ({ id }) => {
    fetchPost(id);
    return (
        <div className="max-w-48">
            <h2 className="text-xl mb-2">
                articles.title
            </h2>
            <p >
               articles.body
            </p>
        </div>
    );
};