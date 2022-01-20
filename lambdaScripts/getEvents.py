import json
import boto3

rds_client = boto3.client('rds-data')

database_name = 'eventos'
db_cluster_arn = 'arn:aws:rds:us-east-1:743778454509:cluster:database-1'
db_credentials_secrets_store_arn = 'arn:aws:secretsmanager:us-east-1:743778454509:secret:rds-db-credentials/cluster-W7UEIIXVD6MYI3U2VECVNV6TZM/admin-xEsGxA'

def lambda_handler(event, context):
    #print(event)
    id = -1
    query = 'SELECT * FROM eventos.Evento'
    if 'queryStringParameters' in event:
        id = event['queryStringParameters']['id']
        #print(id)
        query += " where id = {0}".format(int(id))
        
    #print(query)
    response = execute_statement(query)
    print(response)
    return response
    
def execute_statement(sql):
    response = rds_client.execute_statement(
        secretArn=db_credentials_secrets_store_arn,
        database=database_name,
        resourceArn=db_cluster_arn,
        sql=sql
    )
    return response