import json
import boto3

rds_client = boto3.client('rds-data')

database_name = 'eventos'
db_cluster_arn = 'arn:aws:rds:us-east-1:743778454509:cluster:database-1'
db_credentials_secrets_store_arn = 'arn:aws:secretsmanager:us-east-1:743778454509:secret:rds-db-credentials/cluster-W7UEIIXVD6MYI3U2VECVNV6TZM/admin-xEsGxA'

def lambda_handler(event, context):
    response = execute_statement('SELECT * FROM eventos.Usuario')
    return response['records'];
    
def execute_statement(sql):
    response = rds_client.execute_statement(
        secretArn=db_credentials_secrets_store_arn,
        database=database_name,
        resourceArn=db_cluster_arn,
        sql=sql
    )
    return response
    

    
